import './App.css';
import Projectsite from './components/Projectsite';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})


export default function App() {
  return (
    <ApolloProvider client={client}>
      <Projectsite />
    </ApolloProvider>
  )
}