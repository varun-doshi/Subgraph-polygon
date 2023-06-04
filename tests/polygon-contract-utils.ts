import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  TransferFrom,
  changeNameEvent
} from "../generated/polygonContract/polygonContract"

export function createTransferFromEvent(
  from: Address,
  to: Address,
  amount: BigInt
): TransferFrom {
  let transferFromEvent = changetype<TransferFrom>(newMockEvent())

  transferFromEvent.parameters = new Array()

  transferFromEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferFromEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferFromEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferFromEvent
}

export function createchangeNameEventEvent(name: string): changeNameEvent {
  let changeNameEventEvent = changetype<changeNameEvent>(newMockEvent())

  changeNameEventEvent.parameters = new Array()

  changeNameEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )

  return changeNameEventEvent
}
