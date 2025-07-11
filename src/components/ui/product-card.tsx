"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Star, Heart } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface ProductCardProps {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  emoji: string
  badge?: string
  image?: string
  onAddToCart?: (productId: number) => void
  onAddToWishlist?: (productId: number) => void
}

export function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  rating,
  emoji,
  badge,
  image,
  onAddToCart,
  onAddToWishlist
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const { toast } = useToast()

  const handleAddToCart = () => {
    onAddToCart?.(id)
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    })
  }

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    onAddToWishlist?.(id)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <div className="relative">
        <div className="aspect-square bg-gray-200 rounded-t-lg flex items-center justify-center overflow-hidden">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="text-4xl">{emoji}</div>
          )}
        </div>
        <Button
          size="sm"
          variant="ghost"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 hover:bg-white"
          onClick={handleToggleWishlist}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
        </Button>
        {badge && (
          <Badge className="absolute top-2 left-2">
            {badge}
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-sm line-clamp-1">{name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm ml-1">{rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">${price.toFixed(2)}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <Button size="sm" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
} 