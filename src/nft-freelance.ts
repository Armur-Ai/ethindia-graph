import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
  addClientEvent as addClientEventEvent,
  addFreelancerEvent as addFreelancerEventEvent,
  assignProjectEvent as assignProjectEventEvent,
  listingMintedEvent as listingMintedEventEvent,
  projectCompleted as projectCompletedEvent,
  purchaseListingEvent as purchaseListingEventEvent,
  rejectProjectEvent as rejectProjectEventEvent
} from "../generated/NFTFreelance/NFTFreelance"
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  Transfer,
  addClientEvent,
  addFreelancerEvent,
  assignProjectEvent,
  listingMintedEvent,
  projectCompleted,
  purchaseListingEvent,
  rejectProjectEvent
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleaddClientEvent(event: addClientEventEvent): void {
  let entity = new addClientEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.clientId = event.params.clientId
  entity.name = event.params.name
  entity.email = event.params.email
  entity.phone_number = event.params.phone_number
  entity.company_name = event.params.company_name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleaddFreelancerEvent(event: addFreelancerEventEvent): void {
  let entity = new addFreelancerEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.freelancerId = event.params.freelancerId
  entity.name = event.params.name
  entity.phone_number = event.params.phone_number
  entity.email = event.params.email

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleassignProjectEvent(event: assignProjectEventEvent): void {
  let entity = new assignProjectEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.client = event.params.client
  entity.freelance = event.params.freelance
  entity.listing_price = event.params.listing_price
  entity.project_cost = event.params.project_cost

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlelistingMintedEvent(event: listingMintedEventEvent): void {
  let entity = new listingMintedEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.client = event.params.client
  entity.listing_price = event.params.listing_price
  entity.project_cost = event.params.project_cost

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleprojectCompleted(event: projectCompletedEvent): void {
  let entity = new projectCompleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.client = event.params.client
  entity.freelancer = event.params.freelancer
  entity.project_cost = event.params.project_cost

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlepurchaseListingEvent(
  event: purchaseListingEventEvent
): void {
  let entity = new purchaseListingEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.client = event.params.client
  entity.freelancer = event.params.freelancer
  entity.listing_price = event.params.listing_price

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlerejectProjectEvent(event: rejectProjectEventEvent): void {
  let entity = new rejectProjectEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId
  entity.client = event.params.client
  entity.freelancer = event.params.freelancer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
