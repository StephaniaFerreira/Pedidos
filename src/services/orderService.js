import prisma from "../lib/prisma.js";

export async function createOrder(data) {
  return prisma.order.create({ data });
}

export async function listOrders() {
  return prisma.order.findMany();
}

export async function getOrderById(id) {
  return prisma.order.findUnique({
    where: { orderId: id }
  });
}

export async function updateOrder(id, data) {
  return prisma.order.update({
    where: { orderId: id },
    data
  });
}

export async function deleteOrderById(id) {
  return prisma.order.delete({
    where: { orderId: id }
  });
}