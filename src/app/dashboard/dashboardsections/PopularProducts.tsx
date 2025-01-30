import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar"

const products = [
  { name: 'Premium Dog Food', sales: 450, image: '/dog-food.jpg' },
  { name: 'Cat Scratching Post', sales: 390, image: '/cat-post.jpg' },
  { name: 'Bird Cage', sales: 320, image: '/bird-cage.jpg' },
  { name: 'Fish Tank Filter', sales: 280, image: '/fish-filter.jpg' },
]

export function PopularProducts() {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.name} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={product.image} alt={product.name} />
            <AvatarFallback>{product.name[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{product.name}</p>
            <p className="text-sm text-muted-foreground">
              {product.sales} sold
            </p>
          </div>
          <div className="ml-auto font-medium">{product.sales}</div>
        </div>
      ))}
    </div>
  )
}

