// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAgeDetails} = props
  console.log(vaccinationByAgeDetails)
  return (
    <div className="age-container">
      <h1 className="age-heading">Vaccination by Age</h1>
      <PieChart width={1000} height={300} textAlign="center">
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationByAgeDetails}
          startAngle={0}
          endAngle={360}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="18-44" fill=" #2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="  #64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{
            fontSize: 15,
            fontFamily: 'Roboto',
            paddingTop: 15,
          }}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
