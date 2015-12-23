/**
 * Created by bcp on 12/21/15.
 */
function inventoryEnquiryResponseModel(data) {
    var inventoryEnquiryJson = {};
    inventoryEnquiryJson.item_code = data.l2_cd;
    inventoryEnquiryJson.inventory_type = data.typ_desc;
    inventoryEnquiryJson.inventory_status = data.stat_desc;
    inventoryEnquiryJson.qty = data.sum;
    return inventoryEnquiryJson;
}



module.exports.inventoryEnquiryResponseModel = inventoryEnquiryResponseModel;