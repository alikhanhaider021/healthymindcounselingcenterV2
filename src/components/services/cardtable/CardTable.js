import React from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import './CardTable.css';
const HoursOfOperation = () => {
  const scheduleData = [
    { day: 'Monday', status: 'open', opening: '10:00 AM', closing: '7:00 PM' },
    { day: 'Tuesday', status: 'open', opening: '10:00 AM', closing: '7:00 PM' },
    { day: 'Wednesday', status: 'open', opening: '10:00 AM', closing: '7:00 PM' },
    { day: 'Thursday', status: 'closed', opening: '---', closing: '---' },
    { day: 'Friday', status: 'closed', opening: '---', closing: '---' },
    { day: 'Saturday', status: 'closed', opening: '---', closing: '---' },
    { day: 'Sunday', status: 'closed', opening: '---', closing: '---' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
    

      <div className="CardTable-container">
        <div className="CardTable-wrapper">
          <div className="CardTable-inner">
            <div className="CardTable-header">
              <h2 className="CardTable-title">
                <span className="CardTable-icon">
                  <Clock size={40} />
                </span>
                Hours of Operation
              </h2>
            </div>

            <table className="CardTable-table">
              <thead className="CardTable-thead">
                <tr>
                  <th className="CardTable-th">Day</th>
                  <th className="CardTable-th">Status</th>
                  <th className="CardTable-th">Opening Time</th>
                  <th className="CardTable-th">Closing Time</th>
                </tr>
              </thead>
              <tbody className="CardTable-tbody">
                {scheduleData.map((item, index) => (
                  <tr key={item.day} className="CardTable-row">
                    <td className="CardTable-td">
                      <div className="CardTable-day">
                        <span className="CardTable-day-number">{index + 1}</span>
                        {item.day}
                      </div>
                    </td>
                    <td className="CardTable-td">
                      <span className={`CardTable-status ${item.status === 'open' ? 'CardTable-status-open' : 'CardTable-status-closed'}`}>
                        <span className="CardTable-icon-wrapper">
                          {item.status === 'open' ? (
                            <CheckCircle size={16} />
                          ) : (
                            <XCircle size={16} />
                          )}
                        </span>
                        {item.status === 'open' ? 'Open' : 'Closed'}
                      </span>
                    </td>
                    <td className="CardTable-td">
                      <span className={`CardTable-time ${item.status === 'closed' ? 'CardTable-time-closed' : ''}`}>
                        {item.opening}
                      </span>
                    </td>
                    <td className="CardTable-td">
                      <span className={`CardTable-time ${item.status === 'closed' ? 'CardTable-time-closed' : ''}`}>
                        {item.closing}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoursOfOperation;