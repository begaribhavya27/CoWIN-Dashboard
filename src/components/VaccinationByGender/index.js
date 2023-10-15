// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGenderDetails} = props
  console.log(vaccinationByGenderDetails)
  return (
    <div className="gender-container">
      <h1 className="gender-heading">Vaccination by gender</h1>
      <PieChart width={1000} height={300} textAlign="center">
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationByGenderDetails}
          startAngle={0}
          endAngle={180}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill=" #f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill=" #2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          align="center"
          verticalAlign="bottom"
          wrapperStyle={{
            fontSize: 15,
            fontFamily: 'Roboto',
          }}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
