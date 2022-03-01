import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import AWS from "aws-sdk";
import { v4 } from "uuid";

const docClient = new AWS.DynamoDB.DocumentClient();

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  await docClient.put({
    TableName: "ProductsTable",
    Item: {
      productID: v4(),
    },
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2,
    ),
  };
};
