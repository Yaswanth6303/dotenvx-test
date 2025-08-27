import { Router } from "express";
import Todo from "../models/Todo";

const router = Router();

// Get all todos
router.get("/", async (_, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Add a todo
router.post("/", async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({ title });
  await todo.save();
  res.json(todo);
});

// Update todo
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = await Todo.findByIdAndUpdate(id, { completed }, { new: true });
  res.json(todo);
});

// Delete todo
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted" });
});

export default router;
