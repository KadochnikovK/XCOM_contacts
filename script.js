document.addEventListener("DOMContentLoaded", function () {
    const cityData = {
        moscow: {
            offices: [
                { title: "Центральный офис", address: "125212, г. Москва, Кронштадтский бульвар, 3А, 4-й этаж", phone: "+7 (800) 333-87-09", email: "send@xcom.ru", schedule: "Пн–Пт: 09:00 – 18:00" },
                { title: "Склад и логистика", address: "141701 МО, г. Долгопрудный, Транспортный проезд, д. 6а", phone: "+7 (800) 333-87-09", email: "logistics@xcom.ru", schedule: "Пн–Пт: 09:00 – 17:00" }
            ],
            mapUrl: "https://yandex.ru/map-widget/v1/-/CCUueEFBGC"
        },
        spb: {
            offices: [
                { title: "Офис в Санкт-Петербурге", address: "195027, г. Санкт-Петербург, ул. Магнитогорская, д. 30, лит. А", phone: "+7 (812) 740-11-20", email: "spb@xcom.ru", schedule: "Пн–Пт: 09:30 – 18:00" },
                { title: "Склад и логистика СПб", address: "г. Санкт-Петербург, ул. Коммуны, 67", phone: "+7 (812) 740-11-20", email: "spb.logistics@xcom.ru", schedule: "Пн–Пт: 10:00 – 17:00" }
            ],
            mapUrl: "https://yandex.ru/map-widget/v1/-/CGdP4QZB"
        }
    };

    function renderContacts(city) {
        const container = document.getElementById('contactsContainer');
        const data = cityData[city];
        if (!container) return;
        container.innerHTML = '';
        data.offices.forEach(office => {
            container.innerHTML += `
                <div class="contact-card">
                    <h3>${office.title}</h3>
                    <div class="contact-detail contact-detail--phone">
                        <i class="fas fa-phone-alt"></i>
                        <a href="tel:${office.phone.replace(/\s/g, '')}">${office.phone}</a>
                    </div>
                    <div class="contact-detail contact-detail--email">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:${office.email}">${office.email}</a>
                    </div>
                    <div class="contact-detail contact-detail--address">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${office.address}</span>
                    </div>
                    <div class="contact-detail contact-detail--schedule">
                        <i class="fas fa-clock"></i>
                        <span>${office.schedule}</span>
                    </div>
                </div>`;
        });
        document.getElementById('yandexMap').src = data.mapUrl;
    }

    const employees = {
        sales: [
            { name: "Клишин Виталий", position: "Руководитель отдела развития", phone: "+7 (495) 223-63-39", ext: "1113", photo: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Кретов Сергей", position: "Менеджер отдела развития", phone: "+7 (495) 223-63-39", ext: "1199", photo: "https://randomuser.me/api/portraits/men/45.jpg" },
            { name: "Прудников Андрей", position: "Менеджер отдела развития", phone: "+7 (495) 223-63-39", ext: "1141", photo: "https://randomuser.me/api/portraits/men/22.jpg" }
        ],
        key_accounts: [
            { name: "Олег Борунов", position: "Ведущий менеджер", phone: "+7 (495) 223-63-39", ext: "1181", photo: "https://randomuser.me/api/portraits/men/41.jpg" },
            { name: "Дмитрий Самойлов", position: "Ведущий менеджер", phone: "+7 (495) 223-63-39", ext: "1186", photo: "https://randomuser.me/api/portraits/men/15.jpg" },
            { name: "Павел Романов", position: "Менеджер", phone: "+7 (495) 223-63-39", ext: "1155", photo: "https://randomuser.me/api/portraits/men/59.jpg" },
            { name: "Руслан Брагин", position: "Менеджер", phone: "+7 (495) 223-63-39", ext: "1114", photo: "https://randomuser.me/api/portraits/men/67.jpg" }
        ],
        tender: [
            { name: "Шуговитова Елена", position: "Руководитель тендерного отдела", phone: "+7 (495) 223-63-39", ext: "1156", photo: "https://randomuser.me/api/portraits/women/68.jpg" },
            { name: "Захаров Сергей", position: "Менеджер тендерного отдела", phone: "+7 (495) 223-63-39", ext: "1195", photo: "https://randomuser.me/api/portraits/men/33.jpg" }
        ],
        support: [
            { name: "Илья Васильев", position: "Руководитель отдела комплексной поддержки IT-инфраструктуры", phone: "+7 (495) 223-63-39", ext: "4262", photo: "https://randomuser.me/api/portraits/men/74.jpg" },
            { name: "Оксана Сахарова", position: "Менеджер поддержки", phone: "+7 (495) 223-63-39", ext: "3100", photo: "https://randomuser.me/api/portraits/women/25.jpg" }
        ],
        oil_gas: [
            { name: "Зайченко Дмитрий", position: "Директор департамента по работе с нефтегазовой отраслью", phone: "+7 (495) 223-63-39", ext: "1187", photo: "https://randomuser.me/api/portraits/men/84.jpg" },
            { name: "Николай Богданов", position: "Ведущий менеджер", phone: "+7 (495) 223-63-39", ext: "1126", photo: "https://randomuser.me/api/portraits/men/17.jpg" }
        ]
    };

    function buildDepartments() {
        const container = document.getElementById('accordionRoot');
        if (!container) return;
        const departments = [
            { id: "dept1", title: "Департамент продаж", key: "sales" },
            { id: "dept2", title: "Менеджеры по работе с ключевыми заказчиками", key: "key_accounts" },
            { id: "dept3", title: "Тендерный отдел", key: "tender" },
            { id: "dept4", title: "Департамент комплексной поддержки ИТ инфраструктуры", key: "support" },
            { id: "dept5", title: "Департамент по работе с нефтегазовой отраслью", key: "oil_gas" }
        ];
        let html = '';
        departments.forEach(dept => {
            const empList = employees[dept.key];
            if (!empList) return;
            let employeesHtml = '';
            empList.forEach(emp => {
                const photoHtml = emp.photo ? `<img src="${emp.photo}" alt="${emp.name}">` : `<span>${emp.name.charAt(0)}</span>`;
                employeesHtml += `
                    <div class="manager-item">
                        <div class="manager-photo">${photoHtml}</div>
                        <div class="manager-info">
                            <h4>${emp.name}</h4>
                            <div class="manager-position">${emp.position}</div>
                        </div>
                        <div class="manager-contact">
                            <a href="tel:${emp.phone.replace(/\s/g, '')}">${emp.phone}</a>
                            <span class="ext">доб. ${emp.ext}</span>
                        </div>
                    </div>
                `;
            });
            html += `
                <div class="department-accordion">
                    <div class="accordion-header" data-id="${dept.id}">
                        <span>${dept.title}</span>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="accordion-body" id="${dept.id}Body">
                        <div class="managers-list">${employeesHtml}</div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        document.querySelectorAll('.accordion-header').forEach(header => {
            const bodyId = header.getAttribute('data-id') + 'Body';
            const body = document.getElementById(bodyId);
            const icon = header.querySelector('i');
            if (body) body.style.display = 'none';
            header.addEventListener('click', () => {
                if (body.style.display === 'block') {
                    body.style.display = 'none';
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    body.style.display = 'block';
                    icon.style.transform = 'rotate(180deg)';
                }
            });
        });
    }

    function showModal(title, text, buttonText) {
        const modal = document.querySelector(".contacts-page-modal");
        const modalWindow = modal.querySelector(".contacts-page-modal__window");
        const modalHeadline = modal.querySelector(".contacts-page-modal__headline");
        const modalText = modal.querySelector(".contacts-page-modal__text");
        const modalButton = modal.querySelector(".contacts-page-modal__button");
        const modalClose = modal.querySelector(".contacts-page-modal__close");

        modalHeadline.textContent = title;
        modalText.textContent = text;
        modalButton.textContent = buttonText;

        modal.style.display = "flex";

        function closeModal() {
            modal.style.display = "none";
            modalHeadline.textContent = "";
            modalText.textContent = "";
            modalButton.textContent = "";
        }

        modalButton.onclick = closeModal;
        modalClose.onclick = closeModal;
        modal.onclick = (e) => { if (e.target === modal) closeModal(); };
    }

    function initFormValidation() {
        const form = document.getElementById('feedback');
        if (!form) return;

        function clearErrors() {
            document.querySelectorAll('.form__item').forEach(item => {
                item.classList.remove('form__item--not-valid');
                const error = item.querySelector('.error-message');
                if (error) error.style.display = 'none';
            });
        }

        function addError(element, message) {
            const formItem = element.closest('.form__item');
            formItem.classList.add('form__item--not-valid');
            const errorElement = formItem.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.style.display = 'block';
            }
        }

        function validateField(field) {
            const value = field.value.trim();
            const name = field.name;

            if (field.type === 'checkbox') {
                if (!field.checked) {
                    addError(field, "Необходимо ваше согласие");
                    return false;
                }
                return true;
            }

            if (!value) {
                addError(field, "Это поле обязательно для заполнения");
                return false;
            }

            if (name === 'email') {
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    addError(field, "Введите корректный email");
                    return false;
                }
            }
            if (name === 'phone') {
                if (!/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(value)) {
                    addError(field, "Введите корректный номер телефона");
                    return false;
                }
            }
            return true;
        }

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();

            let isValid = true;
            const fields = form.querySelectorAll('input:not([type=submit]), textarea');
            fields.forEach(field => {
                if (!validateField(field)) isValid = false;
            });

            if (isValid) {
                const formData = {
                    fullName: form.querySelector('[name="fullName"]')?.value.trim() || '',
                    company: form.querySelector('[name="company"]')?.value.trim() || '',
                    phone: form.querySelector('[name="phone"]')?.value.trim() || '',
                    email: form.querySelector('[name="email"]')?.value.trim() || '',
                    comment: form.querySelector('[name="comment"]')?.value.trim() || '',
                    privacyPolicy: form.querySelector('[name="privacy-policy"]')?.checked || false,
                };
                console.log('Данные формы:', formData);
                showModal("Заявка отправлена", "Мы свяжемся с вами в течение 10 минут", "Хорошо");
                form.reset();
            }
        });

        form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function () {
                const formItem = this.closest('.form__item');
                if (formItem) {
                    formItem.classList.remove('form__item--not-valid');
                    const error = formItem.querySelector('.error-message');
                    if (error) error.style.display = 'none';
                }
            });
        });
    }

    function bindActionButtons() {
        const scrollToForm = () => { document.querySelector('.form-wrapper').scrollIntoView({ behavior: 'smooth' }); };
        document.getElementById('heroRequestBtn')?.addEventListener('click', scrollToForm);
        document.getElementById('heroMailBtn')?.addEventListener('click', () => window.location.href = "mailto:send@xcom.ru");
        document.querySelectorAll('.direction-btn, .tender-btn').forEach(btn => btn.addEventListener('click', scrollToForm));
    }

    function initCitySwitch() {
        const cityBtns = document.querySelectorAll('.city-btn');
        cityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                cityBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderContacts(btn.getAttribute('data-city'));
            });
        });
    }

    renderContacts('moscow');
    buildDepartments();
    initCitySwitch();
    bindActionButtons();
    initFormValidation();
});