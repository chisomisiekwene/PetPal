import { Card, CardContent, CardHeader, CardTitle } from '@/Components/ui/card'
import { Dog, Cat, Fish, PawPrint } from 'lucide-react'

export function MetricCard() {
  
const Statsdata = [
  {
    title: "Total Pets",
    icon: PawPrint,
    number: "100",
    scale: "+10% from last month" 
   },
   {
    title: "Dogs",
    icon: Dog,
    number: "40",
    scale: "+5% from last month" 
   },
    {
    title: "Cats",
    icon: Cat,
    number: "35",
    scale: "+3% from last month" 
   },
   {
    title: "Other Pets",
    icon: Fish,
    number: "25",
    scale: "+2% from last month" 
   }
]

  return (
    <>
    {Statsdata.map((item)=>(

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
          <item.icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{item.number}</div>
          <p className="text-xs text-muted-foreground">{item.scale}</p>
        </CardContent>
      </Card>
    ))}

    </>
  )
}


