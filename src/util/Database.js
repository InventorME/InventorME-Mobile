import $ from "jquery";

var urly = "https://3cv3j619jg.execute-api.us-east-2.amazonaws.com/test/inventorme-items";

export class Database{
    get(userEmail){
        let queryURL = urly + "?userEmail='" + userEmail +"'";
        $.ajaxComplete({
            type: 'GET',
            url : queryURL,
            success: function(data){
                console.log('success',data);
                return data;
            },
            error: function(jqXHR, status, err){
                console.log('error getting data',err);
                return err;
            }
        });
    }

    // *** ITEM FORMAT ***
        // var item = {
        //     userEmail: 'lukelmiller@icloud.com',
        //     itemCategory: 'Technology',
        //     ...
        // }

    post(item){
        $.ajaxComplete({
            type: 'POST',
            url: urly,
            data: item,
            success: function(){
                console.log("success", "item added to database");
                return true;
            },
            error: function(jqXHR, status, err){
                console.log("failure", errr);
                return false;
            }
        });
    }
    put(item){
        $.ajaxComplete({
            type: 'PUT',
            url: urly,
            data: item,
            success: function(){
                console.log("success", "item updated in database");
                return true;
            },
            error: function(jqXHR, status, err){
                console.log("failure", errr);
                return false;
            }
        });
    }
    deleteItem(id){
        $.ajaxComplete({
            type: 'DELETE',
            url: urly,
            data: {
                itemID: id
            },
            success: function(){
                console.log("success", "item deleted in database");
                return true;
            },
            error: function(jqXHR, status, err){
                console.log("failure", errr);
                return false;
            }
        });
    }
    deleteUser(email){
        $.ajaxComplete({
            type: 'DELETE',
            url: urly,
            data: {
                userEmail: "'"+email+"'"
            },
            success: function(){
                console.log("success", "user deleted in database");
                return true;
            },
            error: function(jqXHR, status, err){
                console.log("failure", errr);
                return false;
            }
        });
    }





}


