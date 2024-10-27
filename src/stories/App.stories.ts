import { Meta, StoryObj } from "@storybook/react";
import { App } from "../App"; // Вкажіть коректний шлях до вашого компонента App

// Мета-дані для Storybook
const meta: Meta<typeof App> = {
  title: "Example/App", // Назва історії в Storybook
  component: App,
};

export default meta;

// Опис історії
type Story = StoryObj<typeof App>;

export const Default: Story = {
  args: {
    // Вкажіть props за замовчуванням, якщо потрібно
  },
};
