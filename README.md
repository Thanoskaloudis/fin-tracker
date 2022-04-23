# Fin Tracker

## Description

An application that helps self-employees to track their income and expenses in order to give them better insights of their monetary situation, so they can focus on what they love doing without worrying about their finances!

## Set up
1. Make sure Node and yarn are installed from the terminal. Then run:

    ```
    yarn install
    ```

2. Start the project.

    ```
    yarn start
    ```

3. Now you can visit http://localhost:3000 to view your server

## Notes

* Mock up data have been created under ./Public folder to be used as local API. However this implementation works as a prototype for server-side APIs as well.

* This application is being designed to have a cental state using the React Redux library. However, my expierence with Redux is limited, so feedback will be welcomed.

## Widgets

### Transactions

This widget has been created to handle n number of transactions based on data received from an API (local in this example). Each transaction is shown in a data grid table with information like id, date, amount, etc.

### Invoives

This is an interactive widget that has been created with the same logic as the Transactions widget, but with the extra functionality that let the user update some of the invoice information. The widget sends info to the central state and updates the UI(through actions and reduces). 

### Summary

This widget has account information like total amount and budget. In this widget you can set a budget and check if your total amount is above(green) or below (orange) your budget. This widget also calculates the number of transactions and invoices in the last 30 days. Updating invoice widget will update this widget as well.

## Comments

Things that have not been implemented due to time constraints:

* This application is NOT responsive. However, it has been designed to be a scalable product.

* Creating new invoices.



  
