interface TodoItem {
  uuid: string;
  title: string;
  content: string;
  deadline: Date;
  requiredTime: Date;
  completionTime: Date | null;
  priority: number;
}

export default TodoItem;
