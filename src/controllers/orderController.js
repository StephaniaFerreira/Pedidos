import {
  createOrder,
  listOrders,
  getOrderById,
  updateOrder,
  deleteOrderById
} from "../services/orderService.js";

import {
  parseOrder,
  formatOrderResponse
} from "../mappers/orderMapper.js";

export async function create(req, res) {
  try {

    const order = await createOrder(parseOrder(req.body));

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getOrder(req, res) {
  try {

    const id = req.params.id;
    if (!id) throw new Error("ID do pedido não informado");

    const order = await getOrderById(id);

    res.status(200).json(formatOrderResponse(order));

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function update(req, res) {
  try {

    const id = req.params.id;
    if (!id) throw new Error("ID do pedido não informado");

    const order = await updateOrder(id,parseOrder(req.body));

    res.status(201).json(formatOrderResponse(order));

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function list(req, res) {
  try {

    const orders = await listOrders();
    const response = orders.map(order => formatOrderResponse(order));

    res.status(200).json(response);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteOrder(req, res) {
  try {

    const id = req.params.id;
    if (!id) throw new Error("ID do pedido não informado");

    const order = await deleteOrderById(id);

    res.status(200).json("order deletado com sucesso!");

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}