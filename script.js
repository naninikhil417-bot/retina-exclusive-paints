document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;
    const phone = document.getElementById("customerPhone").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;

    const message =
        "🎨 New Paint Order%0A%0A" +
        "👤 Name: " + encodeURIComponent(name) + "%0A" +
        "📱 Phone: " + encodeURIComponent(phone) + "%0A" +
        "🎨 Product: " + encodeURIComponent(product) + "%0A" +
        "🔢 Quantity: " + encodeURIComponent(quantity) + " litres%0A" +
        "📍 Address: " + encodeURIComponent(address);

    const whatsappNumber = "917909076090";

    window.open(
        "https://wa.me/" + whatsappNumber + "?text=" + message,
        "_blank"
    );
});