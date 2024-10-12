import React from "react";
import "./Calendar.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar"; // استخدام اسم مختلف للمكون
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/ar"; // استيراد اللغة العربية

const MyCalendar = () => {
  moment.locale("ar");
  const localizer = momentLocalizer(moment);
  const events = [
    {
      title: "هوم ورك لماده الاتصالات الرقميه",
      start: new Date(2024, 9, 12), // 12 أكتوبر 2024
      end: new Date(2024, 9, 12), // 12 أكتوبر 2024
    },
  ];

  const formats = {
    dayFormat: (date, culture, localizer) => moment(date).format("D MMMM"), // اليوم والشهر بالعربية
    dateFormat: (date, culture, localizer) => moment(date).format("D"), // اليوم فقط
    monthHeaderFormat: (date, culture, localizer) =>
      moment(date).format("MMMM YYYY"), // الشهر والسنة
    timeGutterFormat: (date, culture, localizer) =>
      moment(date).format("HH:mm"), // تنسيق الوقت (24 ساعة)
    eventTimeRangeFormat: () => '', // إزالة عرض الوقت الخاص بالحدث
  };

  // مكون مخصص لعرض الحدث
  const Event = ({ event }) => (
    <span>
      {event.title} {/* عرض اسم الحدث فقط */}
    </span>
  );

  return (
    <div>
      {/* إضافة التقويم */}
      <div className="calendar_section">
        <h3>تقويم الأحداث الأسبوعية</h3>
        <BigCalendar // استخدام الاسم المعدل
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px auto", width: "90%" }}
          defaultView="month"
          views={["month", "agenda"]}
          messages={{
            next: "الشهر المقبل",
            previous: "الشهر السابق",
            today: "اليوم الحالي",
            month: "الشهر",
            week: "أسبوع",
            day: "يوم",
            agenda: "الأحداث",
          }}
          formats={formats}
          components={{ event: Event }} // استخدام المكون المخصص لعرض الحدث
          eventPropGetter={(event) => {
            const backgroundColor = event.title.includes("امتحان")
              ? "#ff6961"
              : "#77dd77";
            return { style: { backgroundColor, padding: "10px" } };
          }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
