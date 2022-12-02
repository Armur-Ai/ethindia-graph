import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
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
} from "../generated/NFTFreelance/NFTFreelance"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createaddClientEventEvent(
  clientId: Address,
  name: string,
  email: string,
  phone_number: BigInt,
  company_name: string
): addClientEvent {
  let addClientEventEvent = changetype<addClientEvent>(newMockEvent())

  addClientEventEvent.parameters = new Array()

  addClientEventEvent.parameters.push(
    new ethereum.EventParam("clientId", ethereum.Value.fromAddress(clientId))
  )
  addClientEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addClientEventEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  addClientEventEvent.parameters.push(
    new ethereum.EventParam(
      "phone_number",
      ethereum.Value.fromUnsignedBigInt(phone_number)
    )
  )
  addClientEventEvent.parameters.push(
    new ethereum.EventParam(
      "company_name",
      ethereum.Value.fromString(company_name)
    )
  )

  return addClientEventEvent
}

export function createaddFreelancerEventEvent(
  freelancerId: Address,
  name: string,
  phone_number: BigInt,
  email: string
): addFreelancerEvent {
  let addFreelancerEventEvent = changetype<addFreelancerEvent>(newMockEvent())

  addFreelancerEventEvent.parameters = new Array()

  addFreelancerEventEvent.parameters.push(
    new ethereum.EventParam(
      "freelancerId",
      ethereum.Value.fromAddress(freelancerId)
    )
  )
  addFreelancerEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addFreelancerEventEvent.parameters.push(
    new ethereum.EventParam(
      "phone_number",
      ethereum.Value.fromUnsignedBigInt(phone_number)
    )
  )
  addFreelancerEventEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )

  return addFreelancerEventEvent
}

export function createassignProjectEventEvent(
  tokenId: BigInt,
  client: Address,
  freelance: Address,
  listing_price: BigInt,
  project_cost: BigInt
): assignProjectEvent {
  let assignProjectEventEvent = changetype<assignProjectEvent>(newMockEvent())

  assignProjectEventEvent.parameters = new Array()

  assignProjectEventEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  assignProjectEventEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )
  assignProjectEventEvent.parameters.push(
    new ethereum.EventParam("freelance", ethereum.Value.fromAddress(freelance))
  )
  assignProjectEventEvent.parameters.push(
    new ethereum.EventParam(
      "listing_price",
      ethereum.Value.fromUnsignedBigInt(listing_price)
    )
  )
  assignProjectEventEvent.parameters.push(
    new ethereum.EventParam(
      "project_cost",
      ethereum.Value.fromUnsignedBigInt(project_cost)
    )
  )

  return assignProjectEventEvent
}

export function createlistingMintedEventEvent(
  tokenId: BigInt,
  client: Address,
  listing_price: BigInt,
  project_cost: BigInt
): listingMintedEvent {
  let listingMintedEventEvent = changetype<listingMintedEvent>(newMockEvent())

  listingMintedEventEvent.parameters = new Array()

  listingMintedEventEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  listingMintedEventEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )
  listingMintedEventEvent.parameters.push(
    new ethereum.EventParam(
      "listing_price",
      ethereum.Value.fromUnsignedBigInt(listing_price)
    )
  )
  listingMintedEventEvent.parameters.push(
    new ethereum.EventParam(
      "project_cost",
      ethereum.Value.fromUnsignedBigInt(project_cost)
    )
  )

  return listingMintedEventEvent
}

export function createprojectCompletedEvent(
  tokenId: BigInt,
  client: Address,
  freelancer: Address,
  project_cost: BigInt
): projectCompleted {
  let projectCompletedEvent = changetype<projectCompleted>(newMockEvent())

  projectCompletedEvent.parameters = new Array()

  projectCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  projectCompletedEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )
  projectCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "freelancer",
      ethereum.Value.fromAddress(freelancer)
    )
  )
  projectCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "project_cost",
      ethereum.Value.fromUnsignedBigInt(project_cost)
    )
  )

  return projectCompletedEvent
}

export function createpurchaseListingEventEvent(
  tokenId: BigInt,
  client: Address,
  freelancer: Address,
  listing_price: BigInt
): purchaseListingEvent {
  let purchaseListingEventEvent = changetype<purchaseListingEvent>(
    newMockEvent()
  )

  purchaseListingEventEvent.parameters = new Array()

  purchaseListingEventEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  purchaseListingEventEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )
  purchaseListingEventEvent.parameters.push(
    new ethereum.EventParam(
      "freelancer",
      ethereum.Value.fromAddress(freelancer)
    )
  )
  purchaseListingEventEvent.parameters.push(
    new ethereum.EventParam(
      "listing_price",
      ethereum.Value.fromUnsignedBigInt(listing_price)
    )
  )

  return purchaseListingEventEvent
}

export function createrejectProjectEventEvent(
  tokenId: BigInt,
  client: Address,
  freelancer: Address
): rejectProjectEvent {
  let rejectProjectEventEvent = changetype<rejectProjectEvent>(newMockEvent())

  rejectProjectEventEvent.parameters = new Array()

  rejectProjectEventEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  rejectProjectEventEvent.parameters.push(
    new ethereum.EventParam("client", ethereum.Value.fromAddress(client))
  )
  rejectProjectEventEvent.parameters.push(
    new ethereum.EventParam(
      "freelancer",
      ethereum.Value.fromAddress(freelancer)
    )
  )

  return rejectProjectEventEvent
}
