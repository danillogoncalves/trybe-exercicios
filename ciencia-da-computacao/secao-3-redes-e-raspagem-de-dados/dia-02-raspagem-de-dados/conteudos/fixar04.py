import requests
from parsel import Selector

page_url = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    response = requests.get(page_url + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()

        print(title, price)

    next_page_url = selector.css(".next a::attr(href)").get()
