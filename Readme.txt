we will be building a mobile factory application using a simplified price list and parts list. The user will input a comma-separated list of components, and the application will generate an order with a total price and list of parts.

The code challenge is solved by creating an HTML file for the structure, a CSS file for the styling, and a JavaScript file for the functionality.

Here we created a sample webpage where the user gives the input in the form of Alphabets and here we complete the order and produce the order id and total payment and what all items they have chosen.

Coming to JavaScript part:
The code defines two objects: priceList and partsList. These objects contain key-value pairs where the keys are single characters (e.g., "A", "B", etc.) and the values are prices and part names, respectively.

priceList contains the prices of each component.
partsList contains the names of each component.

The createOrder function takes an array of components as input and returns an object with three properties: order_id, total, and parts.

The order_id is generated randomly and total as starting set as 0 and then from pricelist we take the costs and add them to total. And we will print parts from the partsList.

So whenever user enter alphabets a create order function is called and we print out the output.Here the input is separated from a coma so that we can extract each Alphabet to get each item.


To run the code:

if you open the website just type the item alphabet and click on result doun the output text you can see the output.


UNIT Test cases:

sample 1:
input:K,A,B,C,D



output:{ "order_id": "order-dy4psvd6e", "total": "138.6", "parts": [ "Metallic Body", "LED Screen", "OLED Screen", "AMOLED Screen", "Wide-Angle Camera" ] }


Sample 2:
input:E,K,A,L



output:{ "order_id": "order-8xazh1u3b", "total": "117.7", "parts": [ "Ultra-Wide-Angle Camera", "Metallic Body", "LED Screen", "Plastic Body" ] }



TO run the Javasript file:

1. type node index.js
2. Enter the components by spaces in between..
3. You will get the output

Note: The input that you enter should be all capital letters

