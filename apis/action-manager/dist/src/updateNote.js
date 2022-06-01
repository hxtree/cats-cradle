"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
async function updateNote(note) {
    let params = {
        TableName: process.env.NOTES_TABLE,
        Key: {
            id: note.id
        },
        ExpressionAttributeValues: {},
        ExpressionAttributeNames: {},
        UpdateExpression: "",
        ReturnValues: "UPDATED_NEW"
    };
    let prefix = "set ";
    let attributes = Object.keys(note);
    for (let i = 0; i < attributes.length; i++) {
        let attribute = attributes[i];
        if (attribute !== "id") {
            params["UpdateExpression"] += prefix + "#" + attribute + " = :" + attribute;
            params["ExpressionAttributeValues"][":" + attribute] = note[attribute];
            params["ExpressionAttributeNames"]["#" + attribute] = attribute;
            prefix = ", ";
        }
    }
    console.log('params: ', params);
    try {
        await docClient.update(params).promise();
        return note;
    }
    catch (err) {
        console.log('DynamoDB error: ', err);
        return null;
    }
}
exports.default = updateNote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlTm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91cGRhdGVOb3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQVdwRCxLQUFLLFVBQVUsVUFBVSxDQUFDLElBQVM7SUFDakMsSUFBSSxNQUFNLEdBQVk7UUFDcEIsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVztRQUNsQyxHQUFHLEVBQUU7WUFDSCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7U0FDWjtRQUNELHlCQUF5QixFQUFFLEVBQUU7UUFDN0Isd0JBQXdCLEVBQUUsRUFBRTtRQUM1QixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLFlBQVksRUFBRSxhQUFhO0tBQzVCLENBQUM7SUFDRixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDcEIsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUN0QyxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ3RCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE1BQU0sR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDNUUsTUFBTSxDQUFDLDJCQUEyQixDQUFDLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2RSxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO1lBQ2hFLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDZjtLQUNIO0lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUE7SUFDL0IsSUFBSTtRQUNGLE1BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN4QyxPQUFPLElBQUksQ0FBQTtLQUNaO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3BDLE9BQU8sSUFBSSxDQUFBO0tBQ1o7QUFDSCxDQUFDO0FBRUQsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpO1xyXG5jb25zdCBkb2NDbGllbnQgPSBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KCk7XHJcblxyXG50eXBlIFBhcmFtcyA9IHtcclxuICBUYWJsZU5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCxcclxuICBLZXk6IHN0cmluZyB8IHt9LFxyXG4gIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IGFueSxcclxuICBFeHByZXNzaW9uQXR0cmlidXRlTmFtZXM6IGFueSxcclxuICBVcGRhdGVFeHByZXNzaW9uOiBzdHJpbmcsXHJcbiAgUmV0dXJuVmFsdWVzOiBzdHJpbmdcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlTm90ZShub3RlOiBhbnkpIHtcclxuICBsZXQgcGFyYW1zIDogUGFyYW1zID0ge1xyXG4gICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5OT1RFU19UQUJMRSxcclxuICAgIEtleToge1xyXG4gICAgICBpZDogbm90ZS5pZFxyXG4gICAgfSxcclxuICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHt9LFxyXG4gICAgRXhwcmVzc2lvbkF0dHJpYnV0ZU5hbWVzOiB7fSxcclxuICAgIFVwZGF0ZUV4cHJlc3Npb246IFwiXCIsXHJcbiAgICBSZXR1cm5WYWx1ZXM6IFwiVVBEQVRFRF9ORVdcIlxyXG4gIH07XHJcbiAgbGV0IHByZWZpeCA9IFwic2V0IFwiO1xyXG4gIGxldCBhdHRyaWJ1dGVzID0gT2JqZWN0LmtleXMobm90ZSk7XHJcbiAgZm9yIChsZXQgaT0wOyBpPGF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW2ldO1xyXG4gICAgaWYgKGF0dHJpYnV0ZSAhPT0gXCJpZFwiKSB7XHJcbiAgICAgIHBhcmFtc1tcIlVwZGF0ZUV4cHJlc3Npb25cIl0gKz0gcHJlZml4ICsgXCIjXCIgKyBhdHRyaWJ1dGUgKyBcIiA9IDpcIiArIGF0dHJpYnV0ZTtcclxuICAgICAgcGFyYW1zW1wiRXhwcmVzc2lvbkF0dHJpYnV0ZVZhbHVlc1wiXVtcIjpcIiArIGF0dHJpYnV0ZV0gPSBub3RlW2F0dHJpYnV0ZV07XHJcbiAgICAgIHBhcmFtc1tcIkV4cHJlc3Npb25BdHRyaWJ1dGVOYW1lc1wiXVtcIiNcIiArIGF0dHJpYnV0ZV0gPSBhdHRyaWJ1dGU7XHJcbiAgICAgIHByZWZpeCA9IFwiLCBcIjtcclxuICAgIH1cclxuIH1cclxuICBjb25zb2xlLmxvZygncGFyYW1zOiAnLCBwYXJhbXMpXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGRvY0NsaWVudC51cGRhdGUocGFyYW1zKS5wcm9taXNlKClcclxuICAgIHJldHVybiBub3RlXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRHluYW1vREIgZXJyb3I6ICcsIGVycilcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVOb3RlOyJdfQ==