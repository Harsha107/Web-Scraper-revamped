import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.config import EMAIL_ADDRESS, EMAIL_PASSWORD

def send_price_alert(product_title: str, product_price: float, target_price: float, product_url: str, recipient_email: str) -> bool:
    """Send price alert email to user"""

    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = recipient_email
        msg['Subject'] = f"Price Alert: '{product_title}' is now below your target price!"

        body = f"""
        <html>
        <body>
            <h2>Price Alert: Your tracked product is now below your target price!</h2>
            <p><strong>Product:</strong> {product_title}</p>
            <p><strong>Current Price:</strong> ${product_price}</p>
            <p><strong>Your Target Price:</strong> ${target_price}</p>
            <p><a href="{product_url}">View Product on Amazon</a></p>
            <br>
            <p>This is an automated message from your Amazon Price Tracker.</p>
        </body>
        </html>
        """

        msg.attach(MIMEText(body, 'html'))

        server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        server.ehlo()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)
        server.quit()

        return True
    except Exception as e:
        print(f"Failed to send email: {e}")
        return False