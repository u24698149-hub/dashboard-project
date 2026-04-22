import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Dashboard Project</h1>
      <p>Your app is working!</p>
    </div>
  ),
})
