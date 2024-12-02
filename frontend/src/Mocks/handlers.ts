import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('http://localhost:5021/decorations', () => {
    
    return HttpResponse.json({
    
        result: [
            {
              "id": "1",
              "name": "Christmas Lights",
              "style": "Modern",
              "price": 49.99,
              "stock": 100,
              "description": "Bright LED Christmas lights for indoor and outdoor use.",
              "image": "https://example.com/images/christmas_lights.jpg",
              "rating": 4.7
            },
            {
              "id": "2",
              "name": "Wreath",
              "style": "Traditional",
              "price": 25.99,
              "stock": 50,
              "description": "A beautifully designed holiday wreath.",
              "image": "https://example.com/images/wreath.jpg",
              "rating": 4.5
            },
    
          ]
    })
  }),
]