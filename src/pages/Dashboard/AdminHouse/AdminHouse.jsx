import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, ResponsiveContainer } from 'recharts';
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHouse = () => {
   const { user } = useAuth();
   const axiosSecure = useAxiosSecure();

   const { data: stats = {} } = useQuery({
      queryKey: ['admin-stats'],
      queryFn: async () => {
         const res = await axiosSecure('/admin-stats');
         return res.data;
      }
   });

   const { data: chartData = [] } = useQuery({
      queryKey: ['chart-data'],
      queryFn: async () => {
         const res = await axiosSecure('/order-stats');
         return res.data;
      }
   });


   const RADIAN = Math.PI / 180;
   const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);

      return (
         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
         </text>
      );
   };



   //====================bar chart
   const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
   };

   const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;

      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
   };


   return (
      <div>
         <Helmet>
            <title>Bistro Boss Restaurant || Admin Home</title>
         </Helmet>
         <div>
            <h2 className="text-3xl my-5 text-red-900 font-semibold text-center">Hi, {user?.displayName}</h2>
         </div>

         <div className="stats shadow">

            <div className="stat">
               <div className="stat-figure text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
               </div>
               <div className="stat-title">Revenue</div>
               <div className="stat-value text-primary">${stats.revenue}</div>
               <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div className="stat-title">Customers</div>
               <div className="stat-value text-secondary">{stats.users}</div>
               <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
               </div>
               <div className="stat-title">Menu Items</div>
               <div className="stat-value text-secondary">{stats.products}</div>
               <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
               <div className="stat-figure text-secondary">
                  <div className="avatar online">
                     <div className="w-16 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                     </div>
                  </div>
               </div>
               <div className="stat-value">{stats.orders}</div>
               <div className="stat-title">Orders</div>
               <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>

         </div>

         <div className="flex">
            <div className="w-1/2">
               <BarChart
                  width={500}
                  height={300}
                  data={chartData}
                  margin={{
                     top: 20,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Bar dataKey="total" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                     {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                     ))}
                  </Bar>
               </BarChart>
            </div>
            <div className="w-1/2">
               <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                     <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="count"
                     >
                        {chartData.map((entry, index) => (
                           <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                        ))}
                     </Pie>
                  </PieChart>
               </ResponsiveContainer>
            </div>
         </div>
      </div>
   );
};

export default AdminHouse;