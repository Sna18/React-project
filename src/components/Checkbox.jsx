import './Checkbox.css';

const Checkbox = ({ studentsArray, datesArray }) => {
  const saveDateElements = datesArray[0].map((stats, i) => {
    return (
      <div className="statWrapper">
        <p className="saveDate">{stats.date}</p>
        {studentsArray.map((student, index) => (
          <div className="checkbox_container" key={index}>
            <div className="checkbox_wrap">
              <input
                type="checkbox"
                className="checkbox"
                checked={student.stats[i].value}
                onChange={() => {
                  // Обработчик изменения состояния чекбокса
                }}
              />
              <label className="custom-checkbox" htmlFor={`checkbox_${index}_${i}`} />
            </div>
          </div>
        ))}
      </div>
    );
  });

  return <>{saveDateElements}</>;
};

export default Checkbox;