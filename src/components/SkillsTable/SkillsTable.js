import React, { useState } from 'react';
import {skillsConfig} from '../../config.js'
import './SkillsTable.scss'

function SkillsTable() {
  return (
    <div className="skills-table-wrapper">
        SkillsTable
        <table>
          <tr>
            <th>Skill</th>
            <th>Total</th>
            <th>Ranks</th>
            <th>Modifier</th>
          </tr>
          {skillsConfig.map(p=>{
            return (
              <tr>
                <td>{p}</td>
                <td>Total Data</td>
                <td>Rank Data</td>
                <td>Modifier Data</td>
              </tr>
              )
            })}
          </table>
    </div>
  )
};

export default SkillsTable;