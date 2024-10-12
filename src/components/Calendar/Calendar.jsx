import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css'; // استيراد ملف CSS

// إعداد المحلِّل الزمني
const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // تعريف الأحداث
  const events = [
    {
      title: ' تسليم هوم ورك لماده الاتصالات الرقميه ',
      start: new Date(2024, 9, 13), // 15 أكتوبر 2024
      end: new Date(2024, 9, 13),
    },
  ];

  // دالة لفتح المودال
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsOpen(true);
  };

  // دالة لإغلاق المودال
  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="rbc-calendar"
        views={['month', 'week', 'day']}
        defaultView="month"
        onSelectEvent={handleSelectEvent} // عند النقر على الحدث
      />

      {/* مودال لعرض تفاصيل الحدث */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {selectedEvent ? (
              <div>
                <h3>{selectedEvent.title}</h3>
                {/* يمكنك إضافة المزيد من التفاصيل هنا إذا لزم الأمر */}
              </div>
            ) : (
              <p>لا يوجد حدث محدد.</p>
            )}
            <button onClick={handleCloseModal} className="close-button">إغلاق</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCalendar;
