import { BigInt, store } from "@graphprotocol/graph-ts";
import {
  addClientEvent as addClientEventEvent,
  addFreelancerEvent as addFreelancerEventEvent,
  assignProjectEvent as assignProjectEventEvent,
  listingMintedEvent as listingMintedEventEvent,
  projectCompleted as projectCompletedEvent,
  purchaseListingEvent as purchaseListingEventEvent,
  rejectProjectEvent as rejectProjectEventEvent,
} from "../generated/NFTFreelance/NFTFreelance";
import { Client, Project, Listing, Freelancer } from "../generated/schema";
import { getNotification, sendEPNSNotification } from "./notification";

export function handleaddClientEvent(event: addClientEventEvent): void {
  let client = Client.load(event.params.clientId);
  if (client === null) {
    client = new Client(event.params.clientId);
  }
  client.name = event.params.name;
  client.email = event.params.email;
  client.phone_number = event.params.phone_number;
  client.company_name = event.params.company_name;
  client.save();
}

export function handleaddFreelancerEvent(event: addFreelancerEventEvent): void {
  let freelancer = Freelancer.load(event.params.freelancerId);
  if (freelancer === null) {
    freelancer = new Freelancer(event.params.freelancerId);
  }
  freelancer.name = event.params.name;
  freelancer.phone_number = event.params.phone_number;
  freelancer.email = event.params.email;
  freelancer.save();
}

export function handlelistingMintedEvent(event: listingMintedEventEvent): void {
  let entity = Listing.load(event.params.tokenId.toString());
  if (entity === null) {
    entity = new Listing(event.params.tokenId.toString());
  }
  entity.client = event.params.client;
  entity.listing_price = event.params.listing_price;
  entity.project_cost = event.params.project_cost;
  entity.sold = false;
  entity.save();
  sendEPNSNotification(
    entity.client.toHexString(),
    getNotification(
      "Project Listed",
      `NFT id: ${event.params.tokenId.toString()} minted`
    )
  );
}

export function handlepurchaseListingEvent(
  event: purchaseListingEventEvent
): void {
  let entity = Listing.load(event.params.tokenId.toString());
  if (entity) {
    entity.sold = true;
    entity.freelancer = event.params.freelancer;
    entity.save();
  }
}

export function handleassignProjectEvent(event: assignProjectEventEvent): void {
  let entity = Project.load(event.params.tokenId.toString());
  if (entity === null) {
    entity = new Project(event.params.tokenId.toString());
  }
  entity.client = event.params.client;
  entity.freelance = event.params.freelance;
  entity.project_cost = event.params.project_cost;
  entity.save();
}

export function handleprojectCompleted(event: projectCompletedEvent): void {
  let entity = Project.load(event.params.tokenId.toString());
  if (entity) {
    store.remove("Project", entity.id);
  }
  let listing = Listing.load(event.params.tokenId.toString());
  if (listing) {
    store.remove("Listing", listing.id);
  }
}

export function handlerejectProjectEvent(event: rejectProjectEventEvent): void {
  let entity = Project.load(event.params.tokenId.toString());
  if (entity) {
    store.remove("Project", entity.id);
  }
  let listing = Listing.load(event.params.tokenId.toString());
  if (listing) {
    listing.sold = false;
    listing.freelancer = null;
    listing.save();
  }
}
