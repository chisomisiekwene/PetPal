import React from 'react'
import { MetricCard } from './dashboardsections/MetricCard'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/Components/ui/card'
import RecentlyAdded from './dashboardsections/RecentyAdded'
import { PopularProducts } from './dashboardsections/PopularProducts'
import { SalesChart } from './dashboardsections/SalesChart'

export default function page() {
  console.log("dashboard")
  return (
    <main className="flex-1 overflow-y-auto p-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard />
          </div>
          <div className="flex flex-col">
            <Card>
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <SalesChart />
              </CardContent>
            </Card>
         
       
            <Card >
              <CardHeader>
                <CardTitle>Recently Added Pets</CardTitle>
              </CardHeader>
              <CardContent>
                <RecentlyAdded />
              </CardContent>
            </Card>
            </div>
        </main>
  )
}


{/* <Card className="col-span-3">
<CardHeader>
  <CardTitle>Popular Products</CardTitle>
  <CardDescription>Top selling items this month</CardDescription>
</CardHeader>
<CardContent>
  <PopularProducts />
</CardContent>
</Card> */}