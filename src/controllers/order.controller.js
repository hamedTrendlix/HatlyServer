const db = require("../database");
// INSERT INTO `_ce526a619e3f46ae`.`tabSales Order Item` (`name`, `modified_by`, `owner`, `docstatus`, `parent`, `parentfield`, `parenttype`, `idx`, `item_code`, `ensure_delivery_based_on_produced_serial_no`, `item_name`, `item_group`, `brand`, `image`, `qty`, `conversion_factor`, `stock_qty`, `price_list_rate`, `base_price_list_rate`, `rate`, `amount`, `base_rate`, `base_amount`, `net_rate`, `net_amount`, `base_net_rate`, `base_net_amount`) VALUES ('shsy6a6a', 'admin@hatlystore.com', 'admin@hatlystore.com', '1', 'test', 'items', 'Sales Order', '1', 'black shark 5 pro 16+512 black', '0', 'Black Shark 5 Pro  Black', 'Mobiles', 'Xiaomi', '/files/qa.jpg', '1', '1', '1', '18500', '18500', '18500', '18500', '18500', '18500', '18500', '18500', '18500', '18500');


// INSERT INTO `_ce526a619e3f46ae`.`tabPayment Schedule` (`name`, `modified_by`, `owner`, `docstatus`, `parent`, `parentfield`, `parenttype`, `idx`, `payment_term`, `invoice_portion`, `payment_amount`, `outstanding`, `base_payment_amount`) VALUES ('testing1', 'admin@hatlystore.com', 'admin@hatlystore.com', '1', 'test', 'payment_schedule', 'Sales Order', '1', 'Valu', '100', '18500.000000000', '18500.000000000', '18500.000000000');
const addOrder = async (req, res, next) => {
  try {
    const user = req.user;
    let sqlUser;
    // const query = `SELECT * From tabCustomer WHERE tabCustomer.id = "${user.id}";`
    // const query = "SELECT * From `_ce526a619e3f46ae`.`tabCustomer` WHERE `tabCustomer`.`id` = '6390931943187d5d22a1e63e';"
    // console.log(query)
    db.query(
      "SELECT * From `tabCustomer` Where `id` = ?;",
      [user.id]
      , (err, data,x) => {
        if (err)
          throw new Error(err.message)
        console.log(data)
        // console.log(x)
        sqlUser = data
      }
    )
    console.log(1)
    console.log(sqlUser)
    res.status(201).json({
      ok: true,
      code: 200,
      message: 'succeeded',
      body: sqlUser
    })
  } catch (e) {
    next(e)
  }
}
module.exports = { addOrder }