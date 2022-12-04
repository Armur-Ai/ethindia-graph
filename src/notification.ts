import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  EpnsNotificationCounter,
  EpnsPushNotification,
} from "../generated/schema";

const subgraphID = "darahask/nftfree";

export function getNotification(title1: string, data: string): string {
  let type = "3",
    title = "Number changed",
    body = `Number changed from `,
    subject = "Number changed",
    message = `Number changed from`,
    image = "null",
    secret = "null",
    cta = "https://epns.io/";
  return `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
  // let image =
  //     "https://play-lh.googleusercontent.com/i911_wMmFilaAAOTLvlQJZMXoxBF34BMSzRmascHezvurtslYUgOHamxgEnMXTklsF-S",
  //   secret = "null",
  //   cta = "https://epns.io/";
  // let notification = `{\"type\": \"3\", \"title\": \"${title}\", \"body\": \"${data}\", \"subject\": \"${title}\", \"message\": \"${data}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`;
  // return notification;
}

export function sendEPNSNotification(
  recipient: string,
  notification: string
): void {
  let id1 = subgraphID;
  log.info("New id of EpnsNotificationCounter is: {}", [id1]);

  let epnsNotificationCounter = EpnsNotificationCounter.load(id1);
  if (epnsNotificationCounter == null) {
    epnsNotificationCounter = new EpnsNotificationCounter(id1);
    epnsNotificationCounter.totalCount = BigInt.fromI32(0);
  }
  epnsNotificationCounter.totalCount = epnsNotificationCounter.totalCount.plus(
    BigInt.fromI32(1)
  );

  let count = epnsNotificationCounter.totalCount.toHexString();
  let id2 = `${subgraphID}+${count}`;
  log.info("New id of EpnsPushNotification is: {}", [id2]);

  let epnsPushNotification = EpnsPushNotification.load(id2);
  if (epnsPushNotification == null) {
    epnsPushNotification = new EpnsPushNotification(id2);
  }

  epnsPushNotification.recipient = recipient;
  epnsPushNotification.notification = notification;
  epnsPushNotification.notificationNumber = epnsNotificationCounter.totalCount;

  epnsPushNotification.save();
  epnsNotificationCounter.save();
}
