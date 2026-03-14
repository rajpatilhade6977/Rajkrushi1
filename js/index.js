
// वेबसाईट लोड झाल्यावर स्वागत मेसेज दाखवण्यासाठी
document.addEventListener('DOMContentLoaded', () => {
    console.log("Ai Ultra प्रोजेक्ट यशस्वीरित्या लोड झाला आहे!");
    
    // जर तुमच्या HTML मध्ये एखादं बटण असेल ज्याचा ID 'mainBtn' आहे, तर:
    const button = document.getElementById('mainBtn');
    
    if (button) {
        button.addEventListener('click', () => {
            alert("Rajkrushi Pro मध्ये तुमचे स्वागत आहे!");
        });
    }
});

// वेळ दाखवण्यासाठी एक छोटे फंक्शन
function showTime() {
    const now = new Date();
    console.log("सध्याची वेळ: " + now.toLocaleTimeString());
}

showTime();
