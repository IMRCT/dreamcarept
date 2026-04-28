import { useParams, Navigate } from 'react-router-dom'
import ConditionPage from '../components/ConditionPage'
import { CONDITION_PAGES } from '../data/conditions'

export default function ConditionRouter() {
  const { slug } = useParams()
  const data = CONDITION_PAGES[slug]
  if (!data) return <Navigate to="/services" replace />
  return <ConditionPage key={slug} slug={slug} {...data} />
}
