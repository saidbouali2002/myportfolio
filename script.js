function downloadCV() {
    // إنشاء عنصر <a> جديد
    const link = document.createElement('a');
    
    // تعيين رابط الملف ومسار التنزيل
    link.href = 'Said_Bouali_Cv.pdf'; // ضع مسار الملف هنا
    link.download = 'Said_Bouali_CV'; // اسم الملف عند التنزيل
    
    // إخفاء الرابط عن الواجهة
    link.style.display = 'none';
    
    // إضافة الرابط إلى الصفحة
    document.body.appendChild(link);
    
    // تفعيل التنزيل
    link.click();
    
    // إزالة الرابط بعد التنزيل
    document.body.removeChild(link);
}