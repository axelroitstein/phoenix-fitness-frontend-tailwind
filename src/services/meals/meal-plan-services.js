export const getMealPlanByToken = async (token) =>{
    try {
      console.log('token is',token)
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/mealPlans`, {
          cache: 'no-cache',
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const  responseFetch = await response.json()
        return responseFetch
      } catch (error) {
        console.log('Error:', error)
      }
    
}

export const createMealPlanByToken = async(token)=>{
  try {
    console.log('token for mealPlan Create is ',token)
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/api/mealPlans`, {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const  responseFetch = await response.json()
      
      return responseFetch
    } catch (error) {
      console.log('Error:', error)
    }
  
}