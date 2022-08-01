import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  AddPool,
  Deposit,
  EmergencyWithdraw,
  Init,
  OwnershipTransferred,
  SetPool,
  UpdateBoostContract,
  UpdateBoostMultiplier,
  UpdateBurnAdmin,
  UpdateCakeRate,
  UpdatePool,
  UpdateWhiteList,
  Withdraw
} from "../generated/MasterChefV2/MasterChefV2"

export function createAddPoolEvent(
  pid: BigInt,
  allocPoint: BigInt,
  lpToken: Address,
  isRegular: boolean
): AddPool {
  let addPoolEvent = changetype<AddPool>(newMockEvent())

  addPoolEvent.parameters = new Array()

  addPoolEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  addPoolEvent.parameters.push(
    new ethereum.EventParam(
      "allocPoint",
      ethereum.Value.fromUnsignedBigInt(allocPoint)
    )
  )
  addPoolEvent.parameters.push(
    new ethereum.EventParam("lpToken", ethereum.Value.fromAddress(lpToken))
  )
  addPoolEvent.parameters.push(
    new ethereum.EventParam("isRegular", ethereum.Value.fromBoolean(isRegular))
  )

  return addPoolEvent
}

export function createDepositEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createEmergencyWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): EmergencyWithdraw {
  let emergencyWithdrawEvent = changetype<EmergencyWithdraw>(newMockEvent())

  emergencyWithdrawEvent.parameters = new Array()

  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return emergencyWithdrawEvent
}

export function createInitEvent(): Init {
  let initEvent = changetype<Init>(newMockEvent())

  initEvent.parameters = new Array()

  return initEvent
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

export function createSetPoolEvent(pid: BigInt, allocPoint: BigInt): SetPool {
  let setPoolEvent = changetype<SetPool>(newMockEvent())

  setPoolEvent.parameters = new Array()

  setPoolEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  setPoolEvent.parameters.push(
    new ethereum.EventParam(
      "allocPoint",
      ethereum.Value.fromUnsignedBigInt(allocPoint)
    )
  )

  return setPoolEvent
}

export function createUpdateBoostContractEvent(
  boostContract: Address
): UpdateBoostContract {
  let updateBoostContractEvent = changetype<UpdateBoostContract>(newMockEvent())

  updateBoostContractEvent.parameters = new Array()

  updateBoostContractEvent.parameters.push(
    new ethereum.EventParam(
      "boostContract",
      ethereum.Value.fromAddress(boostContract)
    )
  )

  return updateBoostContractEvent
}

export function createUpdateBoostMultiplierEvent(
  user: Address,
  pid: BigInt,
  oldMultiplier: BigInt,
  newMultiplier: BigInt
): UpdateBoostMultiplier {
  let updateBoostMultiplierEvent = changetype<UpdateBoostMultiplier>(
    newMockEvent()
  )

  updateBoostMultiplierEvent.parameters = new Array()

  updateBoostMultiplierEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  updateBoostMultiplierEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  updateBoostMultiplierEvent.parameters.push(
    new ethereum.EventParam(
      "oldMultiplier",
      ethereum.Value.fromUnsignedBigInt(oldMultiplier)
    )
  )
  updateBoostMultiplierEvent.parameters.push(
    new ethereum.EventParam(
      "newMultiplier",
      ethereum.Value.fromUnsignedBigInt(newMultiplier)
    )
  )

  return updateBoostMultiplierEvent
}

export function createUpdateBurnAdminEvent(
  oldAdmin: Address,
  newAdmin: Address
): UpdateBurnAdmin {
  let updateBurnAdminEvent = changetype<UpdateBurnAdmin>(newMockEvent())

  updateBurnAdminEvent.parameters = new Array()

  updateBurnAdminEvent.parameters.push(
    new ethereum.EventParam("oldAdmin", ethereum.Value.fromAddress(oldAdmin))
  )
  updateBurnAdminEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return updateBurnAdminEvent
}

export function createUpdateCakeRateEvent(
  burnRate: BigInt,
  regularFarmRate: BigInt,
  specialFarmRate: BigInt
): UpdateCakeRate {
  let updateCakeRateEvent = changetype<UpdateCakeRate>(newMockEvent())

  updateCakeRateEvent.parameters = new Array()

  updateCakeRateEvent.parameters.push(
    new ethereum.EventParam(
      "burnRate",
      ethereum.Value.fromUnsignedBigInt(burnRate)
    )
  )
  updateCakeRateEvent.parameters.push(
    new ethereum.EventParam(
      "regularFarmRate",
      ethereum.Value.fromUnsignedBigInt(regularFarmRate)
    )
  )
  updateCakeRateEvent.parameters.push(
    new ethereum.EventParam(
      "specialFarmRate",
      ethereum.Value.fromUnsignedBigInt(specialFarmRate)
    )
  )

  return updateCakeRateEvent
}

export function createUpdatePoolEvent(
  pid: BigInt,
  lastRewardBlock: BigInt,
  lpSupply: BigInt,
  accCakePerShare: BigInt
): UpdatePool {
  let updatePoolEvent = changetype<UpdatePool>(newMockEvent())

  updatePoolEvent.parameters = new Array()

  updatePoolEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  updatePoolEvent.parameters.push(
    new ethereum.EventParam(
      "lastRewardBlock",
      ethereum.Value.fromUnsignedBigInt(lastRewardBlock)
    )
  )
  updatePoolEvent.parameters.push(
    new ethereum.EventParam(
      "lpSupply",
      ethereum.Value.fromUnsignedBigInt(lpSupply)
    )
  )
  updatePoolEvent.parameters.push(
    new ethereum.EventParam(
      "accCakePerShare",
      ethereum.Value.fromUnsignedBigInt(accCakePerShare)
    )
  )

  return updatePoolEvent
}

export function createUpdateWhiteListEvent(
  user: Address,
  isValid: boolean
): UpdateWhiteList {
  let updateWhiteListEvent = changetype<UpdateWhiteList>(newMockEvent())

  updateWhiteListEvent.parameters = new Array()

  updateWhiteListEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  updateWhiteListEvent.parameters.push(
    new ethereum.EventParam("isValid", ethereum.Value.fromBoolean(isValid))
  )

  return updateWhiteListEvent
}

export function createWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
