"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
async function getNoteById(noteId) {
    const params = {
        TableName: process.env.NOTES_TABLE,
        Key: { id: noteId }
    };
    try {
        const { Item } = await docClient.get(params).promise();
        return Item;
    }
    catch (err) {
        console.log('DynamoDB error: ', err);
    }
}
exports.default = getNoteById;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Tm90ZUJ5SWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZ2V0Tm90ZUJ5SWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRXBELEtBQUssVUFBVSxXQUFXLENBQUMsTUFBYztJQUNyQyxNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7UUFDbEMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRTtLQUN0QixDQUFBO0lBQ0QsSUFBSTtRQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDdEQsT0FBTyxJQUFJLENBQUE7S0FDZDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQTtLQUN2QztBQUNMLENBQUM7QUFFRCxrQkFBZSxXQUFXLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBV1MgPSByZXF1aXJlKCdhd3Mtc2RrJyk7XHJcbmNvbnN0IGRvY0NsaWVudCA9IG5ldyBBV1MuRHluYW1vREIuRG9jdW1lbnRDbGllbnQoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldE5vdGVCeUlkKG5vdGVJZDogU3RyaW5nKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOiBwcm9jZXNzLmVudi5OT1RFU19UQUJMRSxcclxuICAgICAgICBLZXk6IHsgaWQ6IG5vdGVJZCB9XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgSXRlbSB9ID0gYXdhaXQgZG9jQ2xpZW50LmdldChwYXJhbXMpLnByb21pc2UoKVxyXG4gICAgICAgIHJldHVybiBJdGVtXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRHluYW1vREIgZXJyb3I6ICcsIGVycilcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0Tm90ZUJ5SWQiXX0=