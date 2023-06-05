import {
  TransferFrom as TransferFromEvent,
  changeNameEvent as changeNameEventEvent,
} from "../generated/polygonContract/polygonContract";
import { TransferFrom, changeNameEvent } from "../generated/schema";

export function handleTransferFrom(event: TransferFromEvent): void {
  let entity = new TransferFrom(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.from = event.params.from;
  entity.to = event.params.to;
  entity.amount = event.params.amount;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handlechangeNameEvent(event: changeNameEventEvent): void {
  let entity = new changeNameEvent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.name = event.params.name;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

//0x52f44c7b05c141b51331E30a1C7CEdf9f7D2E6a4
