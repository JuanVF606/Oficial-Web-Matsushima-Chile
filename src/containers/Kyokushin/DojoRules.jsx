import React from 'react'
import { dojoRules } from '../../data/dojorules'
const DojoRules = () => {
  return (
    <div className="dojo-info-section">
          <h2 className="header">Reglas del Dojo</h2>
          <div className="dojo-rules">
            {dojoRules.map((rule, index) => (
              <div className="dojo-rule" key={index}>
                <img
                  src={rule.image}
                  alt={`Regla ${index + 1}`}
                  className="dojo-rule-image"
                />
                <p className="dojo-rule-text">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
  )
}

export default DojoRules