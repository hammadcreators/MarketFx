from selenium import webdriver
from selenium.webdriver.common.by import By
from bs4 import BeautifulSoup

chrome_driver_path = "./chromedriver.exe"

def get_economic_calendar(time):
    try:
        # Launch a new browser instance
        browser = webdriver.Chrome(executable_path=chrome_driver_path)
        
        # Navigate to the target page
        browser.get("https://www.investing.com/economic-calendar/")
        
        # Click a button on the page
        buttons = {
            "yesterday": "timeFrame_yesterday",
            "today": "timeFrame_today",
            "tomorrow": "timeFrame_tomorrow",
            "thisweek": "timeFrame_thisWeek",
            "nextweek": "timeFrame_nextWeek",
        }
        button_id = buttons.get(time)
        if button_id:
            button = browser.find_element(By.CSS_SELECTOR, f'#{button_id}')
            button.click()
        
        # Get the updated HTML
        html = browser.page_source
        
        # Close the browser
        browser.quit()
        
        # Parse the HTML using Beautiful Soup
        soup = BeautifulSoup(html, 'html.parser')
        
        # Extract the required data
        table_rows = soup.select(".js-event-item")
        table_data = []
        for row in table_rows:
            date = row.get("data-event-datetime")
            row_data = [date]
            cells = row.select("td")
            for cell in cells:
                impact = cell.get("data-img_key")
                if not cell.text.strip() and impact:
                    row_data.append(impact)
                elif cell.text.strip():
                    row_data.append(cell.text.strip())
            table_data.append(row_data)
        
        print(table_data)
        return table_data
    except Exception as ex:
        print(ex)
        return None

# Example usage:
calendar_data = get_economic_calendar("tomorrow")
if calendar_data:
    # Process the calendar data as needed
    pass
