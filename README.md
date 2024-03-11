# Jumia Web Scraper

This is a web scraping script built with Node.js and Selenium WebDriver to extract product details (name and price) from the Jumia website (https://www.jumia.com.dz/) and store them in an Excel file.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Usage](#usage)
- [License](#license)

## Introduction

This project aims to automate the process of extracting product information from the Jumia website. It utilizes Selenium WebDriver to navigate through the website, locate product elements, and extract their details. The extracted data is then stored in an Excel file for further analysis or processing.

## Features

- Search for products based on a specific keyword (e.g., "laptop").
- Extract product names and prices from multiple pages of search results.
- Store the extracted data in an Excel file with separate columns for product name and price.

## Usage

To use this script:

1. Install Node.js if you haven't already.
2. Clone this repository to your local machine.
3. Install the required dependencies using npm: `npm install`.
4. Run the script: `node test.js`.
5. Wait for the script to scrape the data and create the Excel file named "products.xlsx" in the project directory.

## License

This project is licensed under the [MIT License](LICENSE).

By Wassim Oubaziz
