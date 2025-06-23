import React, { useState } from 'react'
import { useSeller } from '../lib/hooks/useSeller'
import { useSales } from '../lib/hooks/useSales'
import { useRules } from '../lib/hooks/useRule'
import '../styles/globals.css'

export default function CommissionsTable() {
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  
  // Only fetch sellers data when both dates are provided
  const { sellers } = useSeller(startDate, endDate)
  const { sales } = useSales()
  const { rules } = useRules()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // The query will automatically refetch when dates change
  }
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-EC', {
      style: 'currency',
      currency: 'USD'
    }).format(amount)
  }

  // Helper functions to get rule percentage and seller name by ID
  const getRulePercentage = (ruleId: string) => {
    const rule = rules?.find(rule => rule.id === ruleId)
    return rule ? `${rule.rulePercentage}%` : 'N/A'
  }

  const getSellerName = (sellerId: string) => {
    const seller = sellers?.find(seller => seller.id === sellerId)
    return seller ? seller.sellerName : 'N/A'
  }
  return (
    <div className="dashboard-container">
      <h1 className="page-title">Dashboard de Comisiones</h1>
      
      {/* Date Filter */}
      <div className="card fade-in">
        <h2 className="section-title">Filtro de Fechas para Comisiones</h2>
        <form onSubmit={handleSubmit} className="date-filter-form">
          <div className="form-group">
            <label htmlFor="startDate" className="form-label">
              Fecha Inicio
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="endDate" className="form-label">
              Fecha Fin
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <button
            type="submit"
            disabled={!startDate || !endDate}
            className="btn-primary"
          >
            Calcular Comisiones
          </button>
        </form>
      </div>      {/* Sellers Commissions Table */}
      {startDate && endDate && (
        <div className="card fade-in">
          <h2 className="section-title">Comisiones de Vendedores</h2>
          <div className="period-indicator">
            📅 Período: {startDate} - {endDate}
          </div>
          {sellers && sellers.length > 0 ? (
            <div className="table-container">
              <div className="table-wrapper">
                <table className="data-table">
                  <thead className="table-header">
                    <tr>
                      <th>Vendedor</th>
                      <th>Comisión</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    {sellers.map((seller) => (
                      <tr key={seller.id}>
                        <td className="cell-primary">{seller.sellerName}</td>
                        <td className="cell-currency">
                          {formatCurrency(seller.commission)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="empty-state">No hay datos de comisiones para el período seleccionado.</div>
          )}
        </div>
      )}      {/* Sales Table */}
      <div className="card fade-in">
        <h2 className="section-title">Ventas</h2>
        {sales && sales.length > 0 ? (
          <div className="table-container">
            <div className="table-wrapper">
              <table className="data-table">
                <thead className="table-header">
                  <tr>
                    <th>Valor Total</th>
                    <th>Porcentaje de Regla</th>
                    <th>Vendedor</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {sales.map((sale) => (
                    <tr key={sale.id}>
                      <td className="cell-currency">
                        {formatCurrency(sale.totalValue)}
                      </td>
                      <td className="cell-percentage">{getRulePercentage(sale.ruleId)}</td>
                      <td className="cell-secondary">{getSellerName(sale.sellerId)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="empty-state">No hay datos de ventas disponibles.</div>
        )}
      </div>      {/* Rules Table */}
      <div className="card fade-in">
        <h2 className="section-title">Reglas de Comisión</h2>
        {rules && rules.length > 0 ? (
          <div className="table-container">
            <div className="table-wrapper">
              <table className="data-table">
                <thead className="table-header">
                  <tr>
                    <th>Porcentaje de Regla</th>
                    <th>Monto Mínimo</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {rules.map((rule) => (
                    <tr key={rule.id}>
                      <td className="cell-percentage">{rule.rulePercentage}%</td>
                      <td className="cell-currency">
                        {formatCurrency(rule.minimumAmount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="empty-state">No hay reglas de comisión disponibles.</div>
        )}
      </div>
    </div>
  )
}
