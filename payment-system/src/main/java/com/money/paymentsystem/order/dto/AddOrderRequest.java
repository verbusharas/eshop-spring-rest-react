package com.money.paymentsystem.order.dto;


import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
public class AddOrderRequest {
    @NotNull
    private BigDecimal price;
}
