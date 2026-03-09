export function parseOrder(payload) {
    if (!payload) throw new Error("Dados do pedido não foram enviados");
  return {
    orderId: payload.numeroPedido.toString(), 
    value: payload.valorTotal,
    creationDate: new Date(payload.dataCriacao),
    items: payload.items.map(item => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
}

export function formatOrderResponse(order) {
    if (!order) throw new Error("Dados do pedido não foram enviados");
  return {
    numeroPedido: order.orderId,
    valorTotal: order.value,
    dataCriacao: order.creationDate,
    items: order.items.map(item => ({
      idItem: item.productId.toString(),
      quantidadeItem: item.quantity,
      valorItem: item.price
    }))
  };
}