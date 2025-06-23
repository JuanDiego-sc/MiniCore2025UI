export type Seller = {
    id: string
    sellerName: string
    commission: number
}

export type Sale = {
    id: string
    totalValue: number
    ruleId: string
    sellerId: string
}

export type Rule = {
    id: string
    rulePercentage: number
    minimumAmount: number
}