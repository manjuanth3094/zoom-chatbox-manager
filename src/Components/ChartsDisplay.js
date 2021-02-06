import React from 'react'
import { useSelector } from 'react-redux'
import { Chart } from 'react-google-charts'

export const ChartsDisplay = (props) => {
	const alltasks = useSelector((state) => state.allTasks)
	const numberOfComments = alltasks.noOfComments ? alltasks.noOfComments : []
	const commentKeys = Object.keys(numberOfComments)
	const commentValues = Object.values(numberOfComments)

	const indexZeroValue = [['Student Name', 'No. Of Comments']]
	const arr = []
	for (let i = 0; i < commentKeys.length; i++) {
		arr.push([commentKeys[i], commentValues[i]])
	}
	const chartData = [...indexZeroValue, ...arr]
	return (
		<div>
			{ arr.length > 0 &&
				<div>			
					<Chart
						width={'500px'}
						height={'300px'}
						chartType="Table"
						// loader={<div>Loading Chart</div>}
						data={chartData}
						formatters={[
							{
							type: 'ArrowFormat',
							column: 1,
							},
						]}
						options={{
							allowHtml: true,
							showRowNumber: true,
						}}
						//   rootProps={{ 'data-testid': '1' }}
					/>

					<Chart
						width={'500px'}
						height={'300px'}
						chartType='PieChart'
						// loader={<div>Loading Chart</div>}
						data={chartData}
						options={{
							title: 'Student Replies',
							is3D: true,
						}}
						// rootProps={{ 'data-testid': '1' }}
					/>

					<Chart
						width={'500px'}
						height={'300px'}
						chartType='ScatterChart'
						// loader={<div>Loading Chart</div>}
						data={chartData}
						options={{
							title: 'TreandLine',
							hAxis: { title: 'Users' },
							vAxis: { title: 'Replies' },
							legend: 'none',
							trendlines: { 0: {} },
						}}
						rootProps={{ 'data-testid': '1' }}
					/>
				
				</div>
			}					
		</div>
	)
}