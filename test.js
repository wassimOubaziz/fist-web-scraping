const { Builder, By, Key, until } = require("selenium-webdriver");
const { Workbook } = require("exceljs");

async function test() {
  let driver = await new Builder().forBrowser("chrome").build();
  let workbook = new Workbook();
  let worksheet = workbook.addWorksheet("Products");

  try {
    await driver.get("https://www.jumia.com.dz/");
    await driver.findElement(By.name("q")).sendKeys("laptop", Key.RETURN);

    worksheet.columns = [
      { header: "Product Name", key: "name", width: 40 },
      { header: "Price", key: "price", width: 20 },
    ];

    let currentPage = 1;
    while (currentPage <= 5) {
      try {
        let elements = await driver.findElements(
          By.className("prd _fb col c-prd")
        );

        for (let element of elements) {
          try {
            let productNameElement = await element.findElement(
              By.className("name")
            );
            let productName = await productNameElement.getText();

            let priceElement = await element.findElement(By.className("prc"));
            let price = await priceElement.getText();

            worksheet.addRow({ name: productName, price: price });
          } catch (error) {
            console.error(
              "Error occurred while scraping product details:",
              error.message
            );
          }
        }
      } catch (error) {
        console.error("Error occurred while scraping products:", error.message);
      }

      // Click on the next page link
      try {
        let nextPageLink = await driver.wait(
          until.elementLocated(
            By.xpath(`//a[@class='pg' and text()='${currentPage + 1}']`)
          ),
          20000 // Increase waiting time
        );

        // Alternative method 1: JavaScript click
        await driver.executeScript("arguments[0].click();", nextPageLink);

        await driver.sleep(2000); // Wait for the page to load
      } catch (error) {
        console.error(
          "Error occurred while navigating to the next page:",
          error.message
        );
        break; // Break the loop if there's an issue navigating to the next page
      }

      currentPage++;
    }

    await workbook.xlsx.writeFile("products.xlsx");
    console.log("Excel file created successfully!");
  } finally {
    await driver.quit();
  }
}

test();
